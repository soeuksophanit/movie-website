import {
  popular_on_iqiyi,
  top_picks,
  c_drama,
  k_drama,
  animation,
  variety_show,
} from "./data.js";

export const result = [
  ...popular_on_iqiyi,
  ...top_picks,
  ...c_drama,
  ...k_drama,
  ...animation,
  ...variety_show,
];

const popular_iqiyi = document.querySelector(".popular-iqiyi");
const top_pick4u = document.querySelector(".top-picks");
const c_dramas = document.querySelector(".c-drama");
const k_dramas = document.querySelector(".k-drama");
const animations = document.querySelector(".animations");
const variety_shows = document.querySelector(".variety-show");

// loop all the movies to the cards
const all_categories = [
  [popular_on_iqiyi, popular_iqiyi],
  [top_picks, top_pick4u],
  [c_drama, c_dramas],
  [k_drama, k_dramas],
  [animation, animations],
  [variety_show, variety_shows],
];

for (let each_category of all_categories) {
  for (let each_movie of each_category[0]) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
            class="my-card-click duration-300 hover:scale-[1.1] w-full max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a class="relative overlay" href="detail.html?id=${each_movie.id}">
              <img
                class="p-0 rounded-t-lg"
                src=${each_movie.src}
                alt="cdrama"
              />
              <div
                class="flex items-center justify-between absolute bottom-3 z-[70] right-[8px]"
              >
                <span class="text-sm font-normal text-white ">
                  ${
                    each_movie.eps > 1
                      ? each_movie.eps + " Episodes"
                      : each_movie.eps + " Episode"
                  }
                </span>
              </div>
            </a>
            <div class="px-1 pb-5 bg-[#111319]">
              <a href="#">
                <h5
                  class="text-md font-semibold tracking-tight text-white"
                >
                  ${each_movie.title}
                </h5>
              </a>
            </div>
          </div>
    `;

    // append every card to the specific category
    each_category[1].appendChild(div);

    // ------------
  }
}

// search
const searches = document.querySelectorAll("#search-navbar");
const drop_down = document.querySelector(".my-drop-down");
let filtered = "";
// ...
for (let eachSearchBtn of searches) {
  eachSearchBtn.addEventListener("input", (event) => {
    filtered = event.target.value;
    filtered = filtered.trim();
    drop_down.innerHTML = "";

    if (filtered) {
      drop_down.classList.add("active");

      const filter_movies = result.filter((each_mv) =>
        each_mv.title
          .toLocaleLowerCase()
          .trim()
          .includes(filtered.toLocaleLowerCase().trim())
      );

      console.log(filter_movies);

      if (filter_movies.length > 0) {
        for (let foundMovies of filter_movies) {
          const ul = document.createElement("ul");
          ul.classList.add("lists-drop");
          ul.innerHTML = `
            <li>
              <a href="detail.html?id=${
                foundMovies.id
              }" class="flex justify-between items-center border-b py-2 cursor-pointer">
                <img class="object-cover w-[50px] h-[50px] rounded-md" src=${
                  foundMovies.src
                } alt=${foundMovies.title} />
                <p class="flex flex-col justify-between gap-4 text-white items-end">
                  <span class="font-semibold">${foundMovies.title}</span>
                  <span class="text-xs px-3 py-1 bg-red-500 rounded-md">
                    ${
                      foundMovies.eps > 1
                        ? foundMovies.eps + " Episodes"
                        : foundMovies.eps + " Episode"
                    }
                  </span>
                </p>
              </a>
            </li>
          `;
          drop_down.appendChild(ul);
        }
      }
    } else {
      drop_down.classList.remove("active");
    }
  });
}
