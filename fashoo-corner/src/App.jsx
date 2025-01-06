import { createContext, useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";

export const NavContext = createContext();

export default function App({ children }) {
  const [activeNav, setActiveNav] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [closeIconShow, setCloseIconShow] = useState(false);
  const [searchCloseICon, setSearchCloseIcon] = useState(false);
  const [menuIconShow, setMenuIconShow] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [menClothing, setMenClothing] = useState([]);

  const URL =
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=6&lang=en-US";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: URL,
          headers: {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key":
              "848cdd11b1msh7adfec8147814dbp135c7bjsnaffe2ec3ddb2",
          },
        }).finally(() => {
          setLoading(false);
          if (products.length === 0) {
            setErrorMessage("failed to load, check connection");
          }
        });
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        if (error.response) {
          console.log("Error Response:", error.response.data);
        } else {
          console.log("Error", error.message);
        }
      }
    };

    const timer = setTimeout(fetchData, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/category/men's%20clothing?limit=4",
    })
      .then((response) => {
        console.log(response.data);
        setMenClothing(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <NavContext.Provider
      value={{
        activeNav,
        setActiveNav,
        mobileMenuShow,
        setMobileMenuShow,
        closeIconShow,
        setCloseIconShow,
        searchCloseICon,
        setSearchCloseIcon,
        menuIconShow,
        setMenuIconShow,
        searchBox,
        setSearchBox,
        products,
        setProducts,
        errorMessage,
        loading,
        menClothing,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
