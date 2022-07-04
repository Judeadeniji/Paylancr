import { defineConfig } from 'windicss/helpers';

const brand = {
  pri: '#0a253b',
  sec: '#fcb44f',
  acc: '#22d3ee',
  cta: '',
  btn: '',
  // oth: '#1fc1c3',x
};

brand.cta = brand.pri;
brand.btn = brand.pri;

export default defineConfig({
  // safelist: ['prose', 'prose-sm', 'm-auto', 'prose-red'],
  // darkMode: 'media',
  shortcuts: {
    btn: 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'icon-btn':
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
  },
  theme: {
    extend: {
      colors: {
        brand,
      },
    },
  },
});
