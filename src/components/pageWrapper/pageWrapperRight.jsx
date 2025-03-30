import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const swipeVariants = {
  initial: { x: "100%", opacity: 1 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const PageWrapper = ({ children, nextPath }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={swipeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeOut" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          navigate(nextPath);
        }
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
