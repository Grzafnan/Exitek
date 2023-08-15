import React from 'react';

const Stats = () => {
  return (
    <div className="p-10 mx-auto w-5/6 md:w-3/4 md:px-6 lg:px-8 lg:py-8 rounded-[32px] -mt-20 bg-white shadow-2xl">
      <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 md:justify-center lg:items-start md:items-center">
          <div className="mb-1  flex justify-start w-10 h-10 rounded-full sm:w-12 sm:h-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_1_121)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.75 17.082C29.75 16.1155 28.9665 15.332 28 15.332C27.0335 15.332 26.25 16.1155 26.25 17.082V28.4431L22.1515 24.3446C21.4681 23.6612 20.36 23.6612 19.6766 24.3446C18.9932 25.028 18.9932 26.1361 19.6766 26.8195L25.7582 32.9011C26.9949 34.1377 28.9999 34.1377 30.2366 32.9011L36.3182 26.8195C37.0016 26.1361 37.0016 25.028 36.3182 24.3446C35.6347 23.6612 34.5267 23.6612 33.8433 24.3446L29.75 28.4379V17.082ZM18.0859 36.582C17.1194 36.582 16.3359 37.3655 16.3359 38.332C16.3359 39.2985 17.1194 40.082 18.0859 40.082H37.9193C38.8858 40.082 39.6693 39.2985 39.6693 38.332C39.6693 37.3655 38.8858 36.582 37.9193 36.582H18.0859Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_1_121" x1="10.5" y1="2" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6879FF" />
                  <stop offset="1" stop-color="#4253ED" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="font-extrabold text-2xl text-primary">32 Million +</p>
          <p className="-mt-2 text-lg text-gray font-medium leading-7">
            Downloads worldwide
          </p>
        </div>

        <div className="flex flex-col gap-2 md:justify-center lg:items-start md:items-center">
          <div className="mb-1  flex justify-start w-10 h-10 rounded-full sm:w-12 sm:h-12">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_1_127)" />
              <g clip-path="url(#clip0_1_127)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3333 29.6667C35.0513 29.6668 36.7029 30.33 37.9437 31.5182C39.1845 32.7064 39.9188 34.3277 39.9933 36.044L40 36.3333V37.6667C40.0002 38.3394 39.7461 38.9874 39.2887 39.4807C38.8312 39.974 38.2042 40.2762 37.5333 40.3267L37.3333 40.3333H18.6667C17.9939 40.3335 17.3459 40.0794 16.8526 39.622C16.3593 39.1645 16.0571 38.5375 16.0067 37.8667L16 37.6667V36.3333C16.0001 34.6154 16.6634 32.9638 17.8515 31.723C19.0397 30.4821 20.661 29.7479 22.3773 29.6733L22.6667 29.6667H33.3333ZM28 13.6667C29.7681 13.6667 31.4638 14.369 32.714 15.6193C33.9643 16.8695 34.6667 18.5652 34.6667 20.3333C34.6667 22.1014 33.9643 23.7971 32.714 25.0474C31.4638 26.2976 29.7681 27 28 27C26.2319 27 24.5362 26.2976 23.286 25.0474C22.0357 23.7971 21.3333 22.1014 21.3333 20.3333C21.3333 18.5652 22.0357 16.8695 23.286 15.6193C24.5362 14.369 26.2319 13.6667 28 13.6667Z" fill="white" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_1_127" x1="10.5" y1="2" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6879FF" />
                  <stop offset="1" stop-color="#4253ED" />
                </linearGradient>
                <clipPath id="clip0_1_127">
                  <rect width="32" height="32" fill="white" transform="translate(12 11)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <p className="font-extrabold text-2xl text-primary">5 Million +</p>
          <p className="-mt-2 text-lg text-gray font-medium leading-7">
            Monthly active users
          </p>
        </div>

        <div className="flex flex-col gap-2 md:justify-center lg:items-start md:items-center">
          <div className="mb-1  flex justify-start w-10 h-10 rounded-full sm:w-12 sm:h-12">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_1_133)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9303 17.2231C30.331 16.0096 29.3363 15 27.9956 15C26.6566 15 25.659 16.0076 25.0544 17.2198L25.0533 17.222L23.1513 21.055L23.1469 21.0638C23.1237 21.1115 23.0345 21.2347 22.8621 21.3635C22.691 21.4913 22.5469 21.5433 22.4928 21.5529L19.0485 22.1295C17.74 22.3492 16.5255 23.0119 16.1251 24.2752C15.7251 25.5373 16.3317 26.7862 17.268 27.7297L19.9481 30.4302C19.9969 30.4793 20.0883 30.6167 20.1497 30.833C20.2104 31.0463 20.2072 31.2148 20.1912 31.2898L19.4252 34.627C19.098 36.0521 19.1672 37.6491 20.3447 38.5148C21.5 39 23.0524 38.9613 24.3025 38.2138L27.5273 36.2903C27.6023 36.2473 27.7713 36.1929 28.001 36.1929C28.2342 36.1929 28.3972 36.2489 28.4608 36.2869L31.6925 38.2145L31.6935 38.2151C32.9432 38.9589 34.4757 39.3838 35.6528 38.5192C36.832 37.653 36.8946 36.0522 36.5689 34.6281L35.8027 31.2898C35.7867 31.2149 35.7835 31.0464 35.8441 30.833C35.9056 30.6167 35.9969 30.4793 36.0457 30.4302L38.723 27.7325L38.7245 27.731C39.6666 26.7875 40.2754 25.5373 39.8721 24.273C39.4694 23.0107 38.2533 22.3491 36.946 22.1296L33.4986 21.5525C33.4386 21.5424 33.2914 21.4892 33.1201 21.3618C32.9479 21.2338 32.8592 21.1111 32.8361 21.0638L30.9309 17.2242L30.9303 17.2231Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_1_133" x1="10.5" y1="2" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6879FF" />
                  <stop offset="1" stop-color="#4253ED" />
                </linearGradient>
              </defs>
            </svg>

          </div>

          <p className="font-extrabold text-2xl text-primary">4.8</p>
          <p className="-mt-2 text-lg text-gray font-medium leading-7">
            App Store rating
          </p>
        </div>

        <div className="flex flex-col gap-2 md:justify-center lg:items-start md:items-center">
          <div className="mb-1  flex justify-start w-10 h-10 rounded-full sm:w-12 sm:h-12">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_1_137)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2733 16H35.7267C37.212 16 37.752 16.1547 38.2947 16.4454C38.8373 16.736 39.264 17.1627 39.5547 17.7054C39.8453 18.2481 40 18.7868 40 20.2736V30.2875L34.1453 24.8832C33.9329 24.6871 33.6805 24.5395 33.4055 24.4504C33.1304 24.3613 32.8394 24.3329 32.5524 24.3671C32.2653 24.4013 31.9891 24.4974 31.7428 24.6486C31.4964 24.7998 31.2858 25.0027 31.1253 25.2432L26.952 31.5035L23.8813 29.5301C23.472 29.2671 22.9807 29.1623 22.4997 29.2355C22.0186 29.3086 21.5807 29.5546 21.268 29.9274L16.0067 36.2011C16.0023 36.0434 16.0001 35.8856 16 35.7278V20.2736C16 18.7868 16.1547 18.2481 16.4453 17.7054C16.736 17.1627 17.1627 16.736 17.7053 16.4454C18.248 16.1547 18.7867 16 20.2733 16ZM32.9093 27.374L40 33.917V35.7264C40 37.2118 39.8453 37.7519 39.5547 38.2946C39.2705 38.8314 38.8315 39.2704 38.2947 39.5546C37.752 39.8453 37.2133 40 35.7267 40H20.2733C18.7867 40 18.248 39.8453 17.7053 39.5546C17.4708 39.4299 17.2534 39.2753 17.0587 39.0946L22.9333 32.0902L26.0613 34.101C26.5027 34.3846 27.0378 34.4834 27.5513 34.3762C28.0649 34.2689 28.5157 33.9642 28.8067 33.5276L32.9093 27.374ZM22.6507 20.0002C21.1707 20.0002 20 21.1096 20 22.651C20 24.1938 21.172 25.3339 22.6507 25.3339C24.1613 25.3339 25.3333 24.1938 25.3333 22.651C25.3333 21.1096 24.1613 20.0002 22.6507 20.0002Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_1_137" x1="10.5" y1="2" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6879FF" />
                  <stop offset="1" stop-color="#4253ED" />
                </linearGradient>
              </defs>
            </svg>

          </div>

          <p className="font-extrabold text-2xl text-primary">2 Million +</p>
          <p className="-mt-2 text-lg text-gray font-medium leading-7">
            Photos processed daily
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;