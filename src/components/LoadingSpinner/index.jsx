import React from "react";
import "./style.css";
import * as Style from "./style";

export default function LoadingSpinner() {
  window.addEventListener("load", () => {
    let body = document.querySelector("body");
    let loadingPage = document.querySelector(".loader-background");

    body.style.overflow = "hidden";
    loadingPage.style.display = "flex";

    setTimeout(() => {
      body.style.overflow = "scroll";
      loadingPage.style.display = "none";
    }, 3000);
  });

  return (
    <Style.Background className="loader-background">
      <div class="loader">
        <div class="box box-1">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="box box-2">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="box box-3">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="box box-4">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
      </div>
    </Style.Background>
  );
}
