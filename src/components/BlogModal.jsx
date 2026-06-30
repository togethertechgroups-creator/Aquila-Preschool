import { useEffect, useRef } from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogModal({ post, isOpen, onClose, triggerEl }) {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Use setTimeout to ensure the modal is rendered before focusing
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (triggerEl) {
        triggerEl.focus();
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, triggerEl]);

  if (!post) return null;

  return (
    <>
      {isOpen && (
        <Helmet>
          <title>{post.metaTitle}</title>
          <meta name="description" content={post.metaDescription} />
        </Helmet>
      )}
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/60 transition-opacity duration-400 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`fixed inset-0 md:inset-auto md:top-10 md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-[101] bg-white md:rounded-3xl shadow-2xl overflow-y-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-[100%] opacity-0 invisible pointer-events-none'}`}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-wing-red hover:text-white transition-colors"
          aria-label="Close article"
        >
          <X size={24} />
        </button>

        <article className="pb-16">
          <div className="w-full h-64 md:h-[400px] relative">
            <img 
              src={post.coverImage} 
              alt={`Cover for ${post.title}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-6 left-6">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md uppercase tracking-wider"
                style={{ backgroundColor: post.categoryColor }}
                aria-label={`Category: ${post.category}`}
              >
                {post.category}
              </span>
            </div>
          </div>

          <div className="px-6 md:px-12 pt-10 max-w-[680px] mx-auto">
            <h1 id="modal-title" className="text-3xl md:text-4xl font-display text-aquila-navy leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-text-muted gap-4 mb-10 pb-6 border-b border-gray-100 font-heading">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-aquila-navy text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  AT
                </div>
                <span className="font-semibold text-aquila-navy text-base">{post.author}</span>
              </div>
              <div className="flex items-center space-x-1 ml-auto">
                <Calendar size={16} />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div 
              className="blog-content font-body text-[17px] leading-[1.75] text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </>
  );
}
