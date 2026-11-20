const photos = {
  hero: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2200&q=90',
  kashmir: 'images/kashmir-hero.webp',
  himachal: 'images/himachal-hero.webp',
  uttarakhand: 'images/nainital-hero.webp',
  kerala: 'images/Kerala Backwaters Houseboat Paradise.webp',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85',
  charDham: 'https://www.kinghillstravels.com/img/static_page/73ajQlIBay.webp',
  honeymoon: 'images/special-honeymoon.webp',
  ladies: 'images/special-ladies.webp',
  corporate: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90',
  seniors: 'images/special-seniors.webp',
  memory1: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85',
  memory2: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=85',
  memory3: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=700&q=85',
  memory4: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=85',
  memory5: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=85',
  cta: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90'
};

const destinations = [
  { name: 'Kashmir', detail: 'Lakes, Valleys & Snow', image: photos.kashmir, category: 'India' },
  { name: 'Himachal', detail: 'Shimla · Manali · Dalhousie', image: photos.himachal, category: 'India' },
  { name: 'Uttarakhand', detail: 'Haridwar · Rishikesh · Nainital', image: photos.uttarakhand, category: ['India', 'Spiritual'] },
  { name: 'Kerala', detail: 'Backwaters, Hills & More', image: photos.kerala, category: 'India' },
  { name: 'Dubai', detail: 'Dubai · Phuket · Krabi', image: photos.dubai, category: 'International' },
  { name: 'Char Dham', detail: 'Yamunotri · Gangotri · Kedarnath · Badrinath', image: photos.charDham, category: ['India', 'Spiritual'] }
];

const packages = [
  { title: 'Kashmir Group Tour', route: 'Srinagar  •  Sonmarg  •  Gulmarg  •  Pahalgam  •  Vaishnodevi', duration: '7 Nights / 8 Days', price: '₹ 18,499', image: photos.kashmir },
  { title: 'Himachal Mountain Escape', route: 'Shimla  •  Manali  •  Solang Valley', duration: '6 Nights / 7 Days', price: '₹ 15,499', image: photos.himachal },
  { title: 'Kerala Backwater Holiday', route: 'Munnar  •  Thekkady  •  Alleppey', duration: '5 Nights / 6 Days', price: '₹ 16,999', image: photos.kerala },
  { title: 'Uttarakhand Spiritual Trail', route: 'Haridwar  •  Rishikesh  •  Mussoorie', duration: '5 Nights / 6 Days', price: '₹ 14,999', image: photos.uttarakhand }
];

const memories = [photos.memory1, photos.memory2, photos.memory3, photos.memory4, photos.memory5];
const testimonials = [
  { quote: 'Our Himachal trip with RS Tours was a wonderful experience. Everything was well organised – travel, hotel, food and sightseeing. The team was very supportive throughout the journey.', name: 'Priya Desai', place: 'Ahmedabad', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=85' },
  { quote: 'A memorable family holiday from start to finish. The itinerary was thoughtful, the hotels were comfortable and every detail was taken care of.', name: 'Amit Shah', place: 'Vadodara', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=85' },
  { quote: 'We travelled with friends and had the best time. Great coordination, friendly tour leaders and beautiful places. Looking forward to our next trip!', name: 'Neha Patel', place: 'Ahmedabad', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&q=85' }
];

window.RS_DATA = { photos, destinations, packages, memories, testimonials };
