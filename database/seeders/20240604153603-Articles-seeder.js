'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        author: 'John Doe',
        title: '5 Tips Membangun Kebiasaan Sehat',
        body: 'Artikel ini membahas 5 tips mudah untuk membangun kebiasaan sehat dalam kehidupan sehari-hari.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'Jane Smith',
        title: 'Rahasia Memasak Sup Lezat',
        body: 'Temukan tips dan trik untuk memasak sup lezat dan bergizi di rumah.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'Peter Jones',
        title: 'Panduan Lengkap Memilih Sepatu Lari',
        body: 'Artikel ini membantu Anda memilih sepatu lari yang tepat untuk kebutuhan dan gaya lari Anda.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'Mary Brown',
        title: '10 Tempat Wisata Terindah di Indonesia',
        body: 'Jelajahi 10 tempat wisata terindah di Indonesia yang wajib Anda kunjungi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'David Miller',
        title: 'Cara Ampuh Mengatasi Stres',
        body: 'Pelajari cara-cara efektif untuk mengelola stres dan menjaga kesehatan mental Anda.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'Susan White',
        title: 'Resep Kue Cokelat Mudah dan Lezat',
        body: 'Buat kue cokelat lezat dan mudah di rumah dengan resep sederhana ini.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'Mark Williams',
        title: '7 Tips Meningkatkan Produktivitas',
        body: 'Temukan tips dan trik untuk meningkatkan produktivitas dan menyelesaikan lebih banyak pekerjaan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
