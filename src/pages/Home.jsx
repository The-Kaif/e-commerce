/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isOffline, setIsOffline] = useState(false);

  async function fetchProductData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setPosts(data);
      setIsOffline(false); // Reset offline status on successful fetch
    } catch (error) {
      console.log("Error...");
      setPosts([]);
      setIsOffline(true); // Set offline status on fetch error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();

    // Add event listeners to detect online/offline status
    window.addEventListener("online", () => setIsOffline(false));
    window.addEventListener("offline", () => setIsOffline(true));

    return () => {
      window.removeEventListener("online", () => setIsOffline(false));
      window.removeEventListener("offline", () => setIsOffline(true));
    };
  }, []);

  return (
    <div>
      {isOffline && (
        <div className="flex justify-center items-center bg-red-500 text-white p-4">
          Your internet connection is lost. Connect to the internet.
        </div>
      )}
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No post found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
