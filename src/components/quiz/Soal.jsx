import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Dropdown, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get_quiz, post_quiz } from "../../redux/action/index";
//hiraukan
import { Link, useHistory } from "react-router-dom";
import '../quiz/quiz.css'

export const Soal = () => {
    const dispatch = useDispatch();
    const count = 0;
    const listJawaban = [];
    // const [countSoal, setCount] = useState(0); 

    useEffect(() => {
        dispatch(get_quiz());
    }, [dispatch])

    const history = useHistory();
    const mainState = useSelector(state => state?.main)
    const soal = mainState?.soal
    const submit = (values) => {
        dispatch(post_quiz(listJawaban, history));
        console.log(values)
    }
    const logger = (changedValues) => {
        console.log(changedValues)
        listJawaban.push(changedValues)
    }

    return (
        <div>
            <div className='quiz-card'>
                <h2> Tes Tingkat Keparahan Stress </h2>
            </div>
            <div className='card'>
                <Form name='quiz' onFinish={submit} onValuesChange={logger}>
                {
                    !soal ?
                    null
                    :
                    soal.map((soal) => {
                    return (
                        soal.isiQuiz.map((isiSoal, index) => {
                            // count = count + 1
                            // setCount(countSoal + 1)
                            return (
                                <div className='card-soal'>
                                    <Form.Item name={"soal" + index} label={isiSoal.soal}>
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
            <div className='btn-submit'>
                <Form.Item>
                        <Button type='primary' htmlType='submit' className='btn-kirim'>
                            Kirim jawaban
                        </Button>
                </Form.Item>
            </div>
            </Form>
         </div>    
    </div>
        
    );
};

export default Soal;