import { useState, useEffect } from "react";

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

export const useFetch = (url: string, login?: string[]) => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);

  // getUsers function is to get all the data from github api
  const getUsers = async () => {
    setIsLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setUsers(json);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // getUserInfo function is to get the detail data of specific usesrs
  const getUserInfo = async () => {
    let data = [];
    setLoading(true);
    if (login) {
      try {
        for (let i = 0; i < login.length; i++) {
          const res = await fetch(`${url}/${login[i]}`, {
            method: "GET",
          });
          data.push(await res.json());
        }
        setUserInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.log();
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return { users, userInfo, isLoading, loading };
};
