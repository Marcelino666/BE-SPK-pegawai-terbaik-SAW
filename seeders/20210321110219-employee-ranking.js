'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employee_rankings', [{
        pegawai_id: '1',
        nilai_kedisiplinan: '30',
        nilai_kerjasama: '83',
        nilai_inisiatif: '100',
        nilai_kinerja: '15',
        nilai_tanggungJawab: '51',
        nilai_prestasi: '35',
        normalisasi_kedisiplinan: '0.4',
        normalisasi_kerjasama: '1',
        normalisasi_inisiatif: '1',
        normalisasi_kinerja: '0.7',
        normalisasi_tanggungJawab: '0.6',
        normalisasi_prestasi: '0.4',
        nilai_akhir_kedisiplinan: '8',
        nilai_akhir_kerjasama: '15',
        nilai_akhir_inisiatif: '15',
        nilai_akhir_kinerja: '13.4',
        nilai_akhir_tanggungJawab: '12',
        nilai_akhir_prestasi: '4',
        total: '67.4',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        pegawai_id: '2',
        nilai_kedisiplinan: '50',
        nilai_kerjasama: '86',
        nilai_inisiatif: '20',
        nilai_kinerja: '22',
        nilai_tanggungJawab: '75',
        nilai_prestasi: '66',
        normalisasi_kedisiplinan: '0.6',
        normalisasi_kerjasama: '1',
        normalisasi_inisiatif: '0.4',
        normalisasi_kinerja: '0.7',
        normalisasi_tanggungJawab: '0.8',
        normalisasi_prestasi: '0.8',
        nilai_akhir_kedisiplinan: '12',
        nilai_akhir_kerjasama: '15',
        nilai_akhir_inisiatif: '6',
        nilai_akhir_kinerja: '13.4',
        nilai_akhir_tanggungJawab: '16',
        nilai_akhir_prestasi: '8',
        total: '70.4',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        pegawai_id: '3',
        nilai_kedisiplinan: '70',
        nilai_kerjasama: '54',
        nilai_inisiatif: '56',
        nilai_kinerja: '44',
        nilai_tanggungJawab: '95',
        nilai_prestasi: '86',
        normalisasi_kedisiplinan: '0.8',
        normalisasi_kerjasama: '0.6',
        normalisasi_inisiatif: '0.6',
        normalisasi_kinerja: '1',
        normalisasi_tanggungJawab: '1',
        normalisasi_prestasi: '1',
        nilai_akhir_kedisiplinan: '16',
        nilai_akhir_kerjasama: '9',
        nilai_akhir_inisiatif: '9',
        nilai_akhir_kinerja: '20',
        nilai_akhir_tanggungJawab: '20',
        nilai_akhir_prestasi: '10',
        total: '84',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        pegawai_id: '4',
        nilai_kedisiplinan: '90',
        nilai_kerjasama: '55',
        nilai_inisiatif: '70',
        nilai_kinerja: '45',
        nilai_tanggungJawab: '10',
        nilai_prestasi: '37',
        normalisasi_kedisiplinan: '1',
        normalisasi_kerjasama: '0.6',
        normalisasi_inisiatif: '0.8',
        normalisasi_kinerja: '1',
        normalisasi_tanggungJawab: '0.4',
        normalisasi_prestasi: '0.4',
        nilai_akhir_kedisiplinan: '20',
        nilai_akhir_kerjasama: '9',
        nilai_akhir_inisiatif: '12',
        nilai_akhir_kinerja: '20',
        nilai_akhir_tanggungJawab: '8',
        nilai_akhir_prestasi: '4',
        total: '73',
        created_at: new Date(),
        updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employee_rankings', null, {});
  }
};
