import router from "./router";
import useUserManager from "@/store/user-manager";
import { Capacitor } from "@capacitor/core";

router.onError(async () => {
  // none
});

const web_pass_filter = [
  "notFound",
  "Error",
  "Loading",
  "ShareView",
  "ShareAtomyProduct",
];

router.beforeEach(async (to, from, next) => {
  //권한 처리
  const userManager = useUserManager();
  const { unauthorized, role } = to.meta;
  let next_path = undefined;

  // if (Capacitor.getPlatform() === "web") {   //모바일 배포 일때 사용
  if (Capacitor.getPlatform() !== "web") { //웹 테스트 할때 사용
    if (web_pass_filter.some((x) => x === to.name)) {
      next();
    } else {
      next("/error");
    }
  } else {
    if (to.path === "/login") {
      //로그인 페이지로 들어왔을때 로그인 가능하면 인트로 페이지로 이동
      if (await userManager.checkLogin()) next_path = "/intro";
    } else if (!unauthorized) {
      //권한 확인 후 권한 없으면 로그인 페이지로 이동
      if (!(await userManager.checkLogin())) {
        next_path = "/";
      }
    }

    if (next_path === undefined && role) {
      const r = role.filter((x) => x === userManager.identity.role);
      if (r.length === 0) {
        next_path = "/error";
      }
    }

    if (next_path === undefined) {
      next();
    } else {
      next(next_path);
    }
  }
});

router.afterEach(() => {
  // none
});
