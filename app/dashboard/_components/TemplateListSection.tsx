import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
    name: string;
    desc: string;
    icon: string;
    category: string;
    slug: string; 
    aiPrompt: string;
    form?: FORM[];
}

export interface FORM {
    label: string;
    field: string;
    name: string;
    required?: boolean;
}

function TemplateListSection({userSearchInput}:any) {
    const [templateList,setTemplteList]=useState(Templates)

    useEffect(()=>{
if(userSearchInput){
    const filteredData=Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
    setTemplteList(filteredData);

}else{
    setTemplteList (Templates)
    }
    },[userSearchInput])
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {templateList.map((item: TEMPLATE,index:number) => (
                <TemplateCard key={item.slug} {...item} />
            ))}
        </div>
    );
}

export default TemplateListSection;
