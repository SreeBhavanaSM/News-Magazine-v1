import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NewsItem = ({ title, description, src, url }) => {
  return (
    <Card className="max-w-sm p-2" color="primary">
     <CardMedia
        component="img"
        style={{ height: "210px", width: "360px" }}
        image={src ? src : `/assets/background.jpeg` || `/assets/background-1.jpeg`}
        alt="News Thumbnail"
        className="rounded-t-lg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className="text-gray-900 dark:text-white">
          {title && title.slice(0, 50)}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mb-3 text-gray-700 dark:text-gray-400">
          {description ? description.slice(0, 90) : "One top EU leader says Hungary's PM \"has with Russia\" on behalf of the bloc."}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href={url}
          className="mt-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
