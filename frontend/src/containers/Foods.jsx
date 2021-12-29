import React, { Fragment } from 'react';

export const Foods = ({
  match
}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsId は {match.params.restaurantsId} です。
      </p>
    </Fragment>
  )
}
