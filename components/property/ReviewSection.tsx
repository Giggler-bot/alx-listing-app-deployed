import { useEffect, useState } from "react";
import axios from "axios";

type Review = {
  id: string;
  comment: string;
  reviewer: string;
};

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="mb-4 border-b pb-2">
            {/* <p className="italic">"{review.comment}"</p> */}
            <p className="text-xs text-gray-500">- {review.reviewer}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
