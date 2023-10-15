import {
  popular_on_iqiyi,
  top_picks,
  c_drama,
  k_drama,
  animation,
  variety_show,
} from "./data.js";

const result = [
  ...popular_on_iqiyi,
  ...top_picks,
  ...c_drama,
  ...k_drama,
  ...animation,
  ...variety_show,
];

console.log(result);

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log("get id : ", id);

const movie_detail = result.find((mv) => mv.id === parseInt(id));

console.log(movie_detail);

const detail_wrapper = document.querySelector(".hero");
const hero = document.getElementById("hero");
if (movie_detail.src)
  hero.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.3) 123.2px,
        rgb(17, 19, 25) 560px,
        rgb(17, 19, 25) 100%
      ) ,url("${movie_detail.src}")`;

const newDiv = document.createElement("div");
newDiv.classList.add(
  "my-detail",
  "grid",
  "max-w-screen-xl",
  "px-4",
  "py-8",
  "mx-auto",
  "lg:gap-8",
  "xl:gap-0",
  "lg:py-16",
  "lg:grid-cols-12"
);

newDiv.innerHTML = `

<div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="animate-rotate max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
            >
              ${movie_detail.title}
            </h1>
            <p
              class="animate-rotate text max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300"
            >
              ${movie_detail.des}
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Watch
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href=${movie_detail.video_src} target="_blank"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-[#54B435] focus:ring-4 focus:ring-gray-100 text-white"
            >
              On iQIYI
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex my-card-detail">
          ${
            movie_detail.video_src
              ? ` <iframe
              width="560"
              height="500"
              class="rounded-sm"
              src=${movie_detail.video_src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>`
              : `<img src=${movie_detail.src} class="max-h-[550px] w-[450px] object-cover rounded-sm my-card-detail" />`
          }
           
          </div>


`;

detail_wrapper.appendChild(newDiv);
