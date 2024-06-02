import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type BlogBlockCodeProps = {
  language: string;
  value: string;
};

export default function BlogBlockCode({ language, value }: BlogBlockCodeProps) {
  return (
    <SyntaxHighlighter language={language} style={materialOceanic}>
      {value}
    </SyntaxHighlighter>
  );
}
