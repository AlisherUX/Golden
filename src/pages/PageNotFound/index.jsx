import React from 'react';
import * as Style from "./style"

const PageNotFound = () => {
  return (
    <Style.PageWrapper>
      <Style.CenterContent>
        <Style.ErrorCode>
          404
        </Style.ErrorCode>
        <Style.Warning>
          PLEASE CHECK - PAGE URL NAME
        </Style.Warning>
      </Style.CenterContent>
    </Style.PageWrapper>
  )
}

export default PageNotFound;