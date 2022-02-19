module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // darkMode: 'media', // media 다크모드 설정은 os 환경설정에 따라감.
  darkMode: 'class', // 웹 사이트 커스텀 => 부모에 dark 클래스명 추가
  plugins: [require('@tailwindcss/forms')],
};
