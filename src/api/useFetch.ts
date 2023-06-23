import { makeAutoObservable } from "mobx";
type UserInfo = {
  name: string;
  avatar_url: string;
  id: number;
  followers: number;
  following: number;
  company: string;
  url: string;
  login: string;
  public_repos: number;
};
class UserStore {
  posts = <UserInfo[]>[];
  post = <UserInfo[]>[];
  loading = false;
  users = <string[]>[];

  constructor() {
    makeAutoObservable(this);
  }

  // fetch to get user username(login) data
  // fetch from `https://api.github.com/users`
  async fetchPosts() {
    this.loading = true;
    try {
      const response = await fetch("https://api.github.com/users", {
        method: "GET",
      });
      const data = await response.json();
      this.posts = data;
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      this.loading = false;
    }
    // pass username(login) data to fetchPost() function and slice to get only 25 users
    this.fetchPost(this.posts.slice(0, 25).map((user) => user.login));
  }

  // fetch to get the detail of each user data
  // fetch from `https://api.github.com/users/username(login)`
  async fetchPost(login: string[]) {
    this.loading = true;
    let data = [];
    try {
      for (let i = 0; i < login.length; i++) {
        const response = await fetch(
          `https://api.github.com/users/${login[i]}`,
          {
            method: "GET",
          }
        );
        data.push(await response.json());
      }
      this.post = data;
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      this.loading = false;
    }
  }
}

export const userStore = new UserStore();
