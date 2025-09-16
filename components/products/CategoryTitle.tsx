type TCategoryTitleProps = {
  title: string;
};

const CategoryTitle = ({ title }: TCategoryTitleProps) => {
  return (
    <h2
      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16
               bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 
               bg-clip-text text-transparent 
               tracking-wide drop-shadow-md text-center"
    >
      {title}
    </h2>
  );
};
export default CategoryTitle;
