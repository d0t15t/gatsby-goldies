import React from 'react';

const emojiSet = [
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  'โ๏ธ',
  '๐ธ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ฌ',
  '๐ท',
  '๐',
  'โค๏ธ',
  '๐งก',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ค',
  '๐ค',
  '๐ค',
];

const EmojiFlasher = ({ size }) => {
  const emoji = emojiSet[Math.floor(Math.random() * emojiSet.length)];
  return emoji;
};

export default EmojiFlasher;
