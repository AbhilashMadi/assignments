import {useState} from "react";
import Slider from "react-slick";
import "../../scss/css/tags.css";

const categorys = [
  'All',
  'technology',
  'sports',
  'health',
  'entertainment',
  'general',
  'science',
  'sports',
];

function Tags({query,setQuery}){
    
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        controllrs:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
            infinite: true,
        },
    },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 0,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3.3,
                slidesToScroll: 3,
            },
        },
    ],
};

const [selected, setSelected] = useState(1);
console.log(selected)
//for now just I am updatin the category only;
console.log(query)

const handleClick = (e) => {
    if(e.target.value === 'all'){
        return;
    }
  setQuery({...query,[e.target.name]:e.target.value});
};

  return (
    <div className="tags">
      <Slider {...settings}>
        {categorys.map((topic, index) => {
          return (
            <div>
              <button
                className={`tags__btn ${selected === index ? "tags__selected" : ""}`}
                key={index}
                onClick={(e) => {handleClick(e);setSelected(index)}}
                name='category'
                value={topic.toLowerCase()}>
                {topic}
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Tags;