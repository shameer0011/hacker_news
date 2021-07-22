import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useStyles } from "./carousalStyle";
import clsx from "clsx";

const Carousal = (props) => {
  const classes = useStyles();
  const { title, body } = props;

  const [currentPage,setCurrentPage]=useState(()=>body.slice(0,3));
  
  const [index,setIndex] = useState(0);
  const [isClick,setIsClick] = useState(false)
  const pageTotalCount = body.length-2

  useEffect(() => {
    console.log(index,"active index");
    console.log(currentPage,"current page")
  }, [currentPage,index]);
  
  // useEffect (()=>{
  //   setCurrentPage(()=>body.slice(index,index+3))
  // },[index])

  const oneBoxClick = (key, e) => {
    setIsClick(true)
    setIndex(key)
  };

  
  const NextButtons = (nextButton,e) => {
    if(nextButton==="handleNext"){
      if(index===-1){
      setIndex((prev)=>prev+3)
      }else{
        setIndex((prev)=>prev+1)
      }
      setCurrentPage(()=>body.slice(index,index+3))
    }
  };

  const previousButtons = (buttonLeft,e) => {
   if(buttonLeft==="handlePrev"){
     if(currentPage<2){
       console.log("nothing show")
     }
   setIndex((prev)=>prev-1)
   setCurrentPage(()=>body.slice(index,index+3))
  }
}
  return (
    <>
      <div style={{ display: "flex",justifyContent:"space-between"}}>
        <Button
          className={classes.position}
          disabled={true}
          onClick={() => previousButtons("handleDoublePrev")}
          color="primary"
        >
          <KeyboardArrowLeft />
        </Button>
        <Button
          className={classes.abs}
          onClick={() => previousButtons("handlePrev")}
          color="primary"
         disabled= {index===-1}
        >
          <KeyboardArrowLeft />
        </Button>
        <Box display="flex" flexDirection="row">
          {currentPage.map((item, key) => {
            return (
              <Box
              className={isClick ? key===index && classes.active : '' }
                p={1}
                mr={1}
                bgcolor="grey.300"
                onClick={(e) => {
                  oneBoxClick(key, e);
                }}
              >
                { item.author}
              </Box>
            );
          })}
        </Box>

        <Button
          onClick={() => NextButtons("handleNext")}
          color="primary"
          disabled= {currentPage>pageTotalCount}
        >
          <KeyboardArrowRight />
        </Button>

        <Button
          disabled={true}
          onClick={() => NextButtons("handleDoubleNext")}
          color="primary"
        >
          <KeyboardArrowRight />
        </Button>
      </div>
      <div>
        {body[currentPage- 1] &&
          body[currentPage - 1].name}
      </div>
    </>
  );
};
export default Carousal;








// import React, { useState, useEffect } from "react";
// import { Box, Button } from "@material-ui/core";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import { useStyles } from "./carousalStyle";
// const Carousal = (props) => {
//   const { title, body } = props;
//   const [displayDetails, setDisplayDeatails] = useState({
//     total: body.length,
//     current: 1,
//     showItems: 4,
//   });
//   useEffect(() => {
//     console.log(displayDetails.showItems);
//   }, [displayDetails.showItems]);
//   const classes = useStyles();

//   const oneBoxClick = (item, e) => {
//     setDisplayDeatails({ current: item });
//   };

//   const showMore = () => {
//     if (body.length !== displayDetails.showItems) {
//       setDisplayDeatails({
//         showItems:
//           displayDetails.showItems >= body.length
//             ? displayDetails.showItems
//             : displayDetails.showItems + 1,
//       });
//     }
//   };
//   const nextButtons = (nextButton) => {
//     if (nextButton === "handleNext") {
//       setDisplayDeatails({
//         current: displayDetails.current + 1,
//         total: displayDetails.total - 1,
//       });
//     } else {
//       setDisplayDeatails({
//         current: displayDetails.current + 2,
//         total: displayDetails.total - 2,
//       });
//     }
//   };

//   const previousButtons = (buttonLeft) => {
//     if (buttonLeft === "handlePrev") {
//       setDisplayDeatails({
//         current: displayDetails.current - 1,
//         total: displayDetails.total + 1,
//       });
//     } else {
//       setDisplayDeatails({
//         current: displayDetails.current - 2,
//         total: displayDetails.total + 2,
//       });
//     }
//   };

//   return (
//     <>
//       <div style={{ display: "flex",justifyContent:"space-between"}}>
//         <Button
//           className={classes.position}
//           disabled={displayDetails.current <= 2}
//           onClick={() => previousButtons("handleDoublePrev")}
//           color="primary"
//         >
//           <KeyboardArrowLeft />
//         </Button>
//         <Button
//           className={classes.abs}
//           disabled={displayDetails.current === 1}
//           onClick={() => previousButtons("handlePrev")}
//           color="primary"
//         >
//           <KeyboardArrowLeft />
//         </Button>
//         <Box display="flex" flexDirection="row">
//           {body.slice(0, displayDetails.showItems).map((item, key) => {
//             return (
//               <Box
//                 className={
//                   displayDetails.current == item.id ? classes.active : null
//                 }
//                 p={1}
//                 mr={1}
//                 bgcolor="grey.300"
//                 onClick={(e) => {
//                   oneBoxClick(item.id, e);
//                 }}
//               >
//                 {item.id}
//               </Box>
//             );
//           })}
//         </Box>

//         <Button
//           disabled={displayDetails.current >= body.length}
//           onClick={() => nextButtons("handleNext")}
//           color="primary"
//         >
//           <KeyboardArrowRight />
//         </Button>

//         <Button
//           disabled={displayDetails.current >= body.length - 1}
//           onClick={() => nextButtons("handleDoubleNext")}
//           color="primary"
//         >
//           <KeyboardArrowRight />
//         </Button>
//       </div>
//       <div>
//         {body[displayDetails.current - 1] &&
//           body[displayDetails.current - 1].name}
//       </div>
//     </>
//   );
// };
// export default Carousal;
