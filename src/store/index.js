import { createStore } from "vuex";
import { posts } from "./postDb";

export default createStore({
  state: {
    user: false,
    userInfo: {},
    properties: [],
    //  posts
    posts: posts,
    // trendings
    trendings: [
      {
        title: "Gujranwala",
        description: "Lorem Ipsum Project",
        img: "gujranwala.jpg",
        slug: "/trending?city=Gujranwala",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Gujranwala&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Gujranwala&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Gujranwala&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Gujranwala&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Gujranwala&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
      // block code
      {
        title: "Lahore",
        description: "Lorem Ipsum Project",
        img: "lahore.jpg",
        slug: "/trending?city=Lahore",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Lahore&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Lahore&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Lahore&type=residential",
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Lahore&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Lahore&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Lahore&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Lahore&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
      {
        title: "Islamabad",
        description: "Lorem Ipsum Project",
        img: "isl.jpg",
        slug: "/trending?city=Islamabad",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Islamabad&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Islamabad&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Islamabad&type=residential",
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Islamabad&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Islamabad&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Islamabad&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Islamabad&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
      {
        title: "Peshawer",
        description: "Lorem Ipsum Project",
        img: "peshwr.jpg",
        slug: "/trending?city=Peshawer",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Peshawer&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Peshawer&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Peshawer&type=residential",
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Peshawer&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Peshawer&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Peshawer&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Peshawer&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
      {
        title: "Karachi",
        description: "Lorem Ipsum Project",
        img: "karachii.jpg",
        slug: "/trending?city=Karachi",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Karachi&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Karachi&type=residential",
                project: [
                  {
                    id: "1",
                    title: "project 1",
                    img: "isl.jpg",
                    slug: "detail?city=Gujranwala&type=residential",
                  },
                  {
                    id: "2",
                    title: "project 2",
                    img: "rawalpndi.jpg",
                    slug: "detail?city=Gujranwala&type=residential",
                  },
                ],
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Karachi&type=residential",
                project: [
                  {
                    id: "1",
                    title: "project 1",
                    img: "isl.jpg",
                    slug: "detail?city=Gujranwala&type=residential",
                  },
                  {
                    id: "2",
                    title: "project 2",
                    img: "rawalpndi.jpg",
                    slug: "detail?city=Gujranwala&type=residential",
                  },
                ],
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Karachi&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Karachi&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Karachi&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Karachi&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
      {
        title: "Multan",
        description: "Lorem Ipsum Project",
        img: "multan.jpg",
        slug: "/trending?city=Multan",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Multan&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Multan&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Multan&type=residential",
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Multan&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Multan&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Multan&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Multan&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
      {
        title: "Queta",
        description: "Lorem Ipsum Project",
        img: "queta.jpg",
        slug: "/trending?city=Queta",
        projects: [
          {
            type: "residential",
            title: "RESIDENTIAL BUILDINGS",
            img: "isl.jpg",
            slug: "projects?city=Queta&type=residential",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Queta&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Queta&type=residential",
              },
            ],
          },
          {
            type: "commercial",
            title: "COMMERCIAL BUILDING",
            img: "rawalpndi.jpg",
            slug: "projects?city=Queta&type=commercial",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "commercial&residentials",
            title: "COMMERCIAL & RESIDENTIALS",
            img: "multan.jpg",
            slug: "projects?city=Queta&type=commercial&residentials",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "housingschemes",
            title: "HOUSING SCHEMES",
            img: "lahore.jpg",
            slug: "projects?city=Queta&type=housingschemes",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
          {
            type: "farmhouseschems",
            title: "FARM HOUSES SCHEMES ",
            img: "karachii.jpg",
            slug: "projects?city=Queta&type=farmhouseschems",
            project: [
              {
                id: "1",
                title: "project 1",
                img: "isl.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
              {
                id: "2",
                title: "project 2",
                img: "rawalpndi.jpg",
                slug: "detail?city=Gujranwala&type=residential",
              },
            ],
          },
        ],
      },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    userDetail(state, payload) {
      state.userInfo = payload;
    },
    properties(state, payload) {
      state.properties = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit("setUser", payload);
    },
    userDetail({ commit }, payload) {
      commit("userDetail", payload);
    },
    setProperties({ commit }, payload) {
      commit("properties", payload);
    },
  },
});
