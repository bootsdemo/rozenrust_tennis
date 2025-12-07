import React from 'react';
// FIXED: Removed the explicit '.ts' extension from the import path to resolve the compilation error.
import { SectionId, BlogPost } from '../types';
// FIXED: Removed the explicit '.ts' extension from the import path to resolve the compilation error.
import { blogPosts } from '../data/blogPosts'; // Import the static blog data

// Utility function to format the date
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    // Function to ensure correct base path for GitHub Pages subdirectories
    const getImagePath = (path: string | undefined): string => {
        if (!path) return '';
        const basePath = '/rozenrust_tennis/';
        // Check if the path is already absolute or starts with the expected base path
        if (path.startsWith(basePath)) {
            return path;
        }
        // Check if the path is relative to the base directory (e.g., starts with 'assets/')
        if (path.startsWith('/')) {
            // If it's an absolute path but not the base path, prepend base path
            return `${basePath}${path.substring(1)}`;
        }
        // For paths like 'assets/image.jpg'
        return `${basePath}${path}`;
    };

    const imageUrl = getImagePath(post.imageUrl);

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col">
            {post.imageUrl && (
                <div className="h-48 md:h-60 overflow-hidden">
                    <img
                        src={imageUrl} // Use the resolved path
                        alt={post.title}
                        className="w-full h-full object-cover"
                        // Fallback in case the image path is broken
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // prevents infinite loop
                            target.src = "https://placehold.co/800x400/fecaca/991b1b?text=Image+Not+Found"; // Red error placeholder
                            target.alt = "Image failed to load";
                        }}
                    />
                </div>
            )}
            <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-tennis-clay mb-2">
                        News & Updates
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 leading-snug">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.content}
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-xs font-medium text-gray-400">
                        Published: {formatDate(post.date)}
                    </p>
                    {/* Placeholder action for reading the full post */}
                    <button className="mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                        Read more &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

const Blog: React.FC = () => {
    // Check if blogPosts array is empty to prevent rendering an empty section
    if (blogPosts.length === 0) {
        return null;
    }
    
    return (
        <section id={SectionId.BLOG} className="py-20 bg-stone-50">
            <div className="container mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                        Club News & Updates
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the latest announcements, tournament results, and maintenance schedules from Tennispark Rozenrust.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map over the blogPosts array, sorting by date (newest first) */}
                    {blogPosts
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                </div>

                {/* Call to Action for Archives (if needed) */}
                <div className="text-center mt-12">
                    <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-sm">
                        View All Archives
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Blog;
