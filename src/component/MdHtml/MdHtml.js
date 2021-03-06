import React, {useEffect, useState} from "react";
import {cls, isNil} from "../../utils/publicFun";
import marked from "marked";
import hljs from "highlight.js";
import {Loader,Message} from "../index";
import './MdHtml.less';

function MdHtml(props) {
    const {path} = props;
    const [MD,setMD] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            const stream = await fetch(path);
            const text = await stream.text();
            marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: (code)=>hljs.highlightAuto(code).value,
                gfm: true,//是否允许 Git Hub标准的markdown.
                tables: true,//是否允许支持表格语法。该选项要求 gfm 为true
                breaks: false,//是否允许回车换行。该选项要求 gfm 为true
                pedantic: false,//是否尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
                sanitize: false,//是否对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
                smartLists: true,//是否使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
                smartypants: false//是否使用更为时髦的标点，比如在引用语法中加入破折号。
            });
            setMD(marked(text))
        }
        fetchData();
    },[]);

    return <div className={cls("mdHtml fill flex-y",!MD&&'center')}>
        {!MD && <Loader size={40}/>}
        {
            MD && <div className='mdHtml_content flex'>
                <div className='mdHtml_main' dangerouslySetInnerHTML={{__html:MD}}/>
                <div className="mdHtml_index" onClick={handleClick} >{createIndex()}</div>
            </div>
        }
    </div>;

    function createIndex() {
        if(!MD) return;
        return exec(MD).map((item,index)=><span key={index} className={item.ele} data-id={item.id}>{item.text}</span>);

        function exec(value) {
            const res = [];
            const re = /<(h[1-6]+).+id="(.+)">(.+)<\/\1>/g;
            let temp = re.exec(value);

            while(temp){
                const item = {
                    ele:temp[1],
                    id:temp[2],
                    text:temp[3].replace(/<code>|<\/code>/g,'')
                };
                res.push(item);
                temp = re.exec(value)
            }

            return res;
        }
    }

    function handleClick(e) {
        const id = e.target.dataset.id;
        if(isNil(id)) return;
        // const ele = document.querySelector(`#${id}`);//querySelector使用css3选择器查询DOM，css3不支持以数字开头的ID选择器
        const ele = document.getElementById(id);
        if(ele){
            ele.scrollIntoView();
            const info = <p>已成功跳转至标题<span className='code_area'>{ele.innerText}</span></p>;
            return Message.show({icon:'success',info})
        }
        return Message.show({icon:'error',info:'跳转失败'})
    }
}

export default MdHtml;