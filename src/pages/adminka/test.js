import React, {useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {useQuery} from "react-query";
import axios from "axios";


function Test(props) {
    const editorRef = useRef(null);
    const [content, setContent] = useState('')

    const {isError, error, isLoading, data} = useQuery("todos", ()=>{
       return  axios.get(`https://api-ttj.tdtu.uz/public/main`, '',).then((response) => {
            console.log(response.data);

        }).catch((error) => {
            console.log(error.response)
        });})

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setContent(editorRef.current.getContent())
        }
    };
    return (
        <div className='container' style={{marginTop:"200px", minHeight:'60vh'}}>
            <div dangerouslySetInnerHTML={{__html:content}}>

            </div>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}

                apiKey='lz45wcy30h07262uctvyefas1jge012e0q3sbimcsfloward'
                init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
                initialValue="Welcome to TinyMCE!"
            />
            <button onClick={log}>Log editor content</button>
        </div>
    );
}

export default Test;