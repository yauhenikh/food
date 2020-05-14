import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
     'Bearer xZQofDOnNnZ1EYwUrvBMrM2w-328nmHedXbDzo9jou7SWf14wh6Wthk7QYkkMbYoByZDq_9QS3uxwqOARBHsWObAzq1ZsereDR4rU8PitY-NH_SFlzadUAuGjNS6XnYx'
  }
});