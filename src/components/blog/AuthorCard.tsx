import Image from 'next/image';
import Link from 'next/link';
import { PostMeta } from '@/lib/mdx';

interface AuthorCardProps {
  author: NonNullable<PostMeta['author']>;
  className?: string;
}

export default function AuthorCard({ author, className = '' }: AuthorCardProps) {
  return (
    <div className={`flex items-center space-x-4 p-6 bg-gray-50 rounded-lg border ${className}`}>
      {author.avatar && (
        <div className="flex-shrink-0">
          <Image
            src={author.avatar}
            alt={`${author.name} avatar`}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900">{author.name}</h3>
        {author.bio && (
          <p className="text-sm text-gray-600 mt-1">{author.bio}</p>
        )}
        {author.social && (
          <div className="flex space-x-3 mt-2">
            {author.social.twitter && (
              <Link
                href={`https://twitter.com/${author.social.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                Twitter
              </Link>
            )}
            {author.social.linkedin && (
              <Link
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 text-sm"
              >
                LinkedIn
              </Link>
            )}
            {author.social.github && (
              <Link
                href={`https://github.com/${author.social.github.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-800 text-sm"
              >
                GitHub
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}