"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaChevronLeft,
  FaShieldVirus,
  FaCalendar,
  FaTerminal,
  FaLock,
  FaServer,
  FaList,
} from "react-icons/fa";

const BlogPost = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://100.99.73.6/wp-json/wp/v2/posts/${params.id}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  useEffect(() => {
    if (post?.content?.rendered) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content.rendered, "text/html");

      // Format content
      const formatContent = () => {
        // Add spacing after paragraphs
        doc.querySelectorAll("p").forEach((p) => {
          p.style.marginBottom = "1.5em";
        });

        // Format code blocks
        doc.querySelectorAll("pre").forEach((pre) => {
          pre.style.padding = "1.5em";
          pre.style.marginBottom = "1.5em";
        });

        // Format lists
        doc.querySelectorAll("ul, ol").forEach((list) => {
          list.style.marginBottom = "1.5em";
          list.style.paddingLeft = "1.5em";
        });

        return doc.body.innerHTML;
      };

      // Generate table of contents
      const headings = Array.from(doc.querySelectorAll("h2, h3, h4"));
      const tocItems = headings.map((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;
        return {
          id,
          text: heading.textContent,
          level: parseInt(heading.tagName.charAt(1)),
        };
      });

      setToc(tocItems);
      const formattedContent = formatContent();
      setPost((prev) => ({
        ...prev,
        content: { ...prev.content, rendered: formattedContent },
      }));
    }
  }, [post?.content?.rendered]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#272254] text-[#c9e5e0] flex items-center justify-center">
        <div className="cyber-terminal flex items-center gap-2">
          <FaTerminal className="text-[#2558a5] animate-pulse" />
          <span>Decrypting content...</span>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#272254] pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="cyber-back-button mb-8 inline-flex items-center gap-2 hover:bg-[#2558a5]/10 px-4 py-2 rounded transition-all duration-300"
        >
          <FaChevronLeft className="text-[#2558a5]" />
          <span className="text-[#c9e5e0] hover:text-[#ccadd3]">
            Back to Research
          </span>
        </Link>

        <div className="cyber-post-card p-8 rounded-lg border border-[#2558a5]/30 bg-[#272254]/50 backdrop-blur relative overflow-hidden group">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <FaShieldVirus className="text-3xl text-[#2558a5]" />
              <div className="absolute inset-0 animate-ping bg-[#2558a5] opacity-20 rounded-full"></div>
            </div>
            <h1
              className="text-3xl font-['Golden_Antique'] text-[#c9e5e0] relative"
              dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 text-[#ccadd3]">
              <FaCalendar className="text-[#2558a5]" />
              <time>{new Date(post?.date).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-2 text-[#ccadd3] bg-[#2558a5]/10 px-3 py-1 rounded">
              <FaLock className="text-[#2558a5]" />
              <span>Verified Content</span>
            </div>
          </div>

          {/* Table of Contents */}
          {toc.length > 0 && (
            <div className="mb-8 p-4 rounded-lg bg-[#2558a5]/10 border border-[#2558a5]/30">
              <div className="flex items-center gap-2 mb-4">
                <FaList className="text-[#2558a5]" />
                <h2 className="text-lg font-['Golden_Antique'] text-[#ccadd3]">
                  Table of Contents
                </h2>
              </div>
              <nav>
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block hover:text-[#ccadd3] transition-colors ${
                      item.level === 2
                        ? "ml-0"
                        : item.level === 3
                        ? "ml-4"
                        : "ml-8"
                    } mb-2`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          )}

          <div
            className="post-content text-[#c9e5e0] prose prose-invert max-w-none
              prose-headings:font-['Golden_Antique'] prose-headings:text-[#ccadd3] prose-headings:border-b prose-headings:border-[#2558a5]/20 prose-headings:pb-2 prose-headings:mb-6
              prose-h2:text-2xl prose-h2:mt-12
              prose-h3:text-xl prose-h3:mt-8
              prose-h4:text-lg prose-h4:mt-6
              prose-p:leading-relaxed prose-p:my-4
              prose-a:text-[#2558a5] prose-a:no-underline hover:prose-a:text-[#ccadd3]
              prose-code:bg-[#2558a5]/10 prose-code:text-[#ccadd3] prose-code:px-2 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-[#2558a5]/10 prose-pre:border prose-pre:border-[#2558a5]/30 prose-pre:p-4
              prose-img:rounded-lg prose-img:border prose-img:border-[#2558a5]/30 prose-img:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-[#2558a5] prose-blockquote:bg-[#2558a5]/10 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:my-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2 prose-li:marker:text-[#2558a5]"
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
          />

          <div className="mt-8 pt-4 border-t border-[#2558a5]/20 flex items-center justify-between text-sm text-[#ccadd3]">
            <div className="flex items-center gap-2">
              <FaTerminal className="text-[#2558a5]" />
              <span>
                {Math.ceil(post?.content?.rendered.split(" ").length / 200)} min
                read
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaServer className="text-[#2558a5]" />
              <span>{post?.content?.rendered.split(" ").length} words</span>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#2558a5] to-transparent -translate-x-full animate-scan"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
