import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Dropdown, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get_quiz } from "../../redux/action/index";
//hiraukan
import { Link, useHistory } from "react-router-dom";
import '../quiz/quiz.css'

export const Soal = () => {
    const dispatch = useDispatch();
    const [countSoal, setCount] = useState(0); 

    useEffect(() => {
        dispatch(get_quiz());
    }, [dispatch])

    const history = useHistory();
    const mainState = useSelector(state => state?.main)
    const soal = mainState?.soal

    console.log('iniSoal', soal);

    return (
        <div>
            <div className='quiz-card'>
                <h2> Tes Tingkat Keparahan Stress </h2>
            </div>
            <div className='card'>
                {
                    !soal ?
                    null
                    :
                    soal.map((soal) => {
                    return (
                        soal.isiQuiz.map((isiSoal) => {
                            console.log(isiSoal)
                            return (
                                <div className='card-soal'>
                                    <Form.Item name={"soal" + countSoal} label={isiSoal.soal}>
                                <div className='pilihan-jawaban'>
                                    <Radio.Group size="small" buttonStyle='outline'>
                                        <Space direction="horizontal">
                                        <Radio value="a">{isiSoal.pilihanA}</Radio>
                                        <Radio value="b">{isiSoal.pilihanB}</Radio>
                                        <Radio value="c">{isiSoal.pilihanC}</Radio>
                                        <Radio value="d">{isiSoal.pilihanD}</Radio>
                                        </Space>
                                    </Radio.Group>
                                </div>
                                </Form.Item>
                             </div>
                            )
                        })
                    )
                }
                )}
                </div>

            <div className='btn-submit'>
                <Form.Item>
                    <Link to ='/result'>
                        <Button type="primary" htmlType="submit" shape='round' color='#FFCD4F'>
                            Kirim jawaban
                        </Button>
                    </Link>
                </Form.Item>
            </div>
        </div>
    );
};

export default Soal;