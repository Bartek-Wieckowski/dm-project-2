type BlogPageDetails = {
  id: string,
  slug: string,
  title: string,
  content: string,
  author: string,
};

export default function BlogPageDetails({ params }: { params: BlogPageDetails }) {
  return <div>{params.slug}</div>;
}
