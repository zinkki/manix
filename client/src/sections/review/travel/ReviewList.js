// @mui
import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';
//
import ReviewItem from './ReviewItem';

// ----------------------------------------------------------------------

export default function ReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review) => {
        const { id, name, rating, helpful, message, postedAt, avatarUrl, replyComment, users } =
          review;

        const hasReply = !!replyComment.length;

        return (
          <Box key={id}>
            <ReviewItem
              name={name}
              avatarUrl={avatarUrl}
              postedAt={postedAt}
              message={message}
              rating={rating}
              helpful={helpful}
            />

            {hasReply &&
              replyComment.map((reply) => {
                const userReply = users.filter((user) => user.id === reply.userId)[0];

                return (
                  <ReviewItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    message={reply.message}
                    name={userReply.name}
                    avatarUrl={userReply.avatarUrl}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          mt: 5,
          mb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};
