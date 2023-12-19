import Category from "@/pages/category";
import Details from "@/pages/details";
import Home from "@/pages/home";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<Home />} path="/" />
        <Route element={<Category />} path="/categoria/:category" />
        <Route element={<Details />} path="/detalhes/:dish" />
      </Switch>
    </BrowserRouter>
  );
}