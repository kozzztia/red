import React from 'react';
import { Metadata } from 'next';
import style from '../../index.module.css';
import { notFound } from 'next/navigation';
import { getItem } from '@/utils/api';

type Props = {
  params: {
    item: string;
  };
};



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {item} = await Promise.resolve(params);
  const { title, body} = await getItem(item);
  return {
    title: `Item: ${title}`,
    description: `Description: ${body}`,
  };
}


const Page = async ({ params }: Props) => {
  const {item} = await Promise.resolve(params);
  const data = await getItem(item);

  if (!data) {
    notFound();
  }

  return (
    <div className={style.container}>
      <h1>{`Item: ${data.title}`}</h1>
      <p>{`Description: ${data.body}`}</p>
    </div>
  );
};

export default Page;
