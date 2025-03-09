"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaTerminal,
  FaLock,
  FaShieldVirus,
  FaChevronRight,
  FaServer,
  FaCalendar,
  FaFolder,
  FaCode,
  FaInfoCircle,
  FaFlag,
  FaBug,
  FaSearch, // Add this import
} from "react-icons/fa";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [scanStatus, setScanStatus] = useState("SCANNING");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://100.99.73.6/wp-json/wp/v2/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchPosts = async () => {
      try {
        let url = "http://100.99.73.6/wp-json/wp/v2/posts?_embed&per_page=100";
        if (activeCategory !== "all") {
          url += `&categories=${activeCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : [data]);
        setScanStatus("SECURE");
      } catch (error) {
        console.error("Error:", error);
        setScanStatus("ERROR");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchPosts();
  }, [activeCategory]);

  useEffect(() => {
    if (!posts) return;

    const filtered = posts.filter(
      (post) =>
        post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const getCategoryIcon = (slug) => {
    switch (slug) {
      case "ctf-writeup":
        return <FaFlag />;
      case "tutorial":
        return <FaCode />;
      case "information":
        return <FaInfoCircle />;
      default:
        return <FaBug />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#272254] text-[#c9e5e0] flex items-center justify-center">
        <div className="cyber-terminal flex items-center gap-2">
          <FaTerminal className="text-[#2558a5] animate-pulse" />
          <span>Loading secure content...</span>
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="min-h-screen bg-[#272254] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <FaShieldVirus className="text-4xl text-[#2558a5]" />
              <div className="absolute inset-0 animate-ping bg-[#2558a5] opacity-20 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-['Golden_Antique'] text-[#c9e5e0] relative overflow-hidden">
              Security Research
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2558a5] to-transparent"></div>
            </h2>
          </div>

          {/* Add Search Bar */}
          <div className="cyber-search-bar mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search secure documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-[#2558a5]/10 
                          border border-[#2558a5]/30 text-[#c9e5e0] 
                          placeholder:text-[#ccadd3]/50 focus:border-[#2558a5] 
                          focus:outline-none focus:ring-1 focus:ring-[#2558a5] 
                          transition-all duration-300"
              />
              {/* <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2558a5]" /> */}

              {/* Search Status */}
              <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                            flex items-center gap-2 text-xs text-[#ccadd3]"
              >
                <span className="font-mono">
                  {searchQuery ? `${filteredPosts.length} results` : "READY"}
                </span>
                <div
                  className={`w-2 h-2 rounded-full ${
                    searchQuery
                      ? "bg-[#2558a5] animate-pulse"
                      : "bg-[#2558a5]/50"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                ${
                  activeCategory === "all"
                    ? "bg-[#2558a5] text-[#c9e5e0]"
                    : "bg-[#2558a5]/10 text-[#ccadd3] hover:bg-[#2558a5]/20"
                }`}
            >
              <FaFolder
                className={
                  activeCategory === "all" ? "text-[#c9e5e0]" : "text-[#2558a5]"
                }
              />
              <span className="font-mono">All Posts</span>
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                  ${
                    activeCategory === category.id
                      ? "bg-[#2558a5] text-[#c9e5e0]"
                      : "bg-[#2558a5]/10 text-[#ccadd3] hover:bg-[#2558a5]/20"
                  }`}
              >
                <span
                  className={
                    activeCategory === category.id
                      ? "text-[#c9e5e0]"
                      : "text-[#2558a5]"
                  }
                >
                  {getCategoryIcon(category.slug)}
                </span>
                <span className="font-mono">{category.name}</span>
                <span className="ml-2 text-xs bg-[#2558a5]/20 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-4 mb-8">
            <div className="cyber-terminal flex-1 flex items-center gap-2 px-4 py-2 rounded bg-[#2558a5]/10 border border-[#2558a5]/30">
              <FaTerminal className="text-[#2558a5]" />
              <span className="text-[#2558a5] font-mono">root@security</span>
              <span className="text-[#ccadd3]">:~/blog$</span>
              <span className="text-[#c9e5e0] font-mono typing-animation">
                {searchQuery
                  ? `grep -r "${searchQuery}"`
                  : activeCategory === "all"
                  ? "ls -la"
                  : `cd ${
                      categories.find((c) => c.id === activeCategory)?.slug ||
                      ""
                    }`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#ccadd3] text-sm">
              <FaServer className="text-[#2558a5]" />
              <span>{filteredPosts.length} Posts Found</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="cyber-card group relative p-6 rounded-lg border border-[#2558a5]/30 bg-[#272254] hover:border-[#2558a5] transition-all duration-300">
                {/* Corner Effects */}
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>

                {/* Card Content */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaLock className="text-[#2558a5]" />
                    <span className="text-xs font-mono text-[#ccadd3]">
                      SECURE POST
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#2558a5] bg-[#2558a5]/10 px-2 py-1 rounded">
                    ID: {post.id}
                  </div>
                </div>

                <h3
                  className="text-xl font-['Golden_Antique'] text-[#c9e5e0] mb-4 group-hover:text-[#ccadd3] transition-colors line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div
                  className="text-[#ccadd3] mb-6 line-clamp-3 text-sm"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                {/* Add Category Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post._embedded?.["wp:term"]?.[0]?.map((term) => (
                    <span
                      key={term.id}
                      className="text-xs font-mono px-2 py-1 rounded bg-[#2558a5]/10 text-[#ccadd3]"
                    >
                      {getCategoryIcon(term.slug)}
                      <span className="ml-1">{term.name}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2558a5]/20">
                  <span className="text-sm text-[#2558a5] flex items-center gap-2">
                    <FaCalendar className="text-xs" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <div className="cyber-button-small group-hover:translate-x-2 transition-transform bg-[#2558a5]/10 p-2 rounded">
                    <FaChevronRight className="text-[#2558a5]" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-[#2558a5] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </article>
            </Link>
          ))}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <FaSearch className="text-4xl text-[#2558a5] mx-auto mb-4 opacity-50" />
              <p className="text-[#ccadd3]">
                No secure documents found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
