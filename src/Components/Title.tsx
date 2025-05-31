type TitleProps = {
  title: string;
  align: string;
};

function Title({ title,align }: TitleProps) {
  return (
    <h3 className={`${align} text-2xl text-black/80 font-bold text-center capitalize`}>
      {title}
    </h3>
  );
}

export default Title;
