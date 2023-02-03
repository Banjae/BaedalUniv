import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.jpg";

const NotFound = () => {
  return (
    <section className="container mx-auto">
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <img
            src={error}
            className="object-cover w-full h-64"
            alt="에러사진"
          />
          <p className="my-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            서비스 <span className="text-main">이용에 불편</span>을 드려
            죄송합니다.
          </p>
          <p className="my-5 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            We <span className="text-main"> can't find</span>
            {""} this page.
          </p>

          <p className="mt-4 text-gray-500 leading-5">
            요청한 웹페이지의 이름이 바뀌었거나 현재{" "}
            <span className="font-semibold">사용할 수 없거나 삭제</span>
            되었습니다. <br />
            <br />
            입력하신 주소가 정확한지{" "}
            <span className="font-semibold">
              다시 한번 확인해보시기 바랍니다.
            </span>
          </p>
          <Link
            to="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium
            text-white bg-main rounded focus:outline-none focus:ring"
          >
            메인 페이지로 이동
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
