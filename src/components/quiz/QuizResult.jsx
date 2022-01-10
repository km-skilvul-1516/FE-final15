import React from 'react';
import '../quiz/quiz.css'

export const QuizResult = () => {
    return (
        <div>
            <div className='card-result'>
                <div className='card-result-title'>
                    <h2>Hasil Tes Tingkat Keparahan Stress</h2>
                </div>
                <div className='table-result'>
                    <table>
                        <tr>
                            <td>
                                Total Pertanyaan
                            </td>
                            <td>
                                10
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Total Nilai
                            </td>
                            <td>
                                100/100
                            </td>
                        </tr>
                    </table>
                    <table className='result-desc'>
                        <tr>
                            Berdasarkan hasil tes maka tingkat stress kamu adalah TINGGI.
                            Oleh karena itu, kami menyarankan agar melakukan sesi konseling
                            untuk membantumu mencari jalan keluar dari masalah yang mengganggu pikiranmu.
                            Kamu bisa melihat profil psikolog yang akan menemani sesi konselingmu.
                            Selain itu, kamu juga bisa menikmati konten-konten yang tersedia
                            untuk membuat pikiran kamu lebih tenang.
                        </tr>
                    </table>
                </div>
                <div className='btn-result'>
                    <button className='btn-konten'>
                        Lihat konten
                    </button>
                    <button className='btn-layanan'>
                        Ambil layanan
                    </button>
                </div>
            </div>
        </div>
    )
};

export default QuizResult;