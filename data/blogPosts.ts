import { BlogPost } from '../types.ts';

/**
 * Array holding all static blog posts for the website.
 * Note: Field names must match the 'BlogPost' interface in types.ts (id, date, title, content, imageUrl).
 * Image paths must be relative to the GitHub Pages repository base (e.g., /rozenrust_tennis/assets/...).
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Spring Tournament Registration Open",
    // Use YYYY-MM-DD format for proper sorting
    date: "2024-03-15", 
    content: `
      We are excited to announce that registration for the annual Rozenrust Spring Open is now officially open! 
      
      This year, we are introducing a new mixed-doubles category. The tournament will take place on the weekend of April 20-21. 
      It is a fantastic way to kick off the outdoor season, meet fellow members, and enjoy some competitive but friendly tennis.
      
      Sign up sheets are available at the clubhouse or you can send an email to the competition committee. 
      The entry fee is €10 per person, which includes lunch on Sunday.
    `,
    // This post includes the image path you specified.
    imageUrl: "/rozenrust_tennis/assets/CourtPicture5.jpeg" 
  },
  {
    id: 2,
    title: "Winter Court Maintenance Complete",
    // Use YYYY-MM-DD format
    date: "2024-02-02",
    content: `
      Great news! The annual maintenance of our two Red Artificial Turf courts has been completed ahead of schedule.
      
      The specialized team has deep-cleaned the surface, redistributed the sand infill, and checked all the lines. 
      This ensures optimal grip and drainage for the remainder of the winter season. 
      
      Please remember to drag the courts after playing to keep the sand evenly distributed. See you on the court!
    `,
    // This post does not have an image, so the 'imageUrl' field is omitted.
  }
];
