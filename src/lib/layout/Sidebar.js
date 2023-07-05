import React from 'react'

import { _get } from '../utility/generic'

const Sidebar = props => {
  const renderGroupContent = (group, isRightSidebar, groupTitleKey, groupRightTitleKey) => {
    if (props.groupRenderer) {
      return React.createElement(props.groupRenderer, {
        group,
        isRightSidebar
      })
    } else {
      return _get(group, isRightSidebar ? groupRightTitleKey : groupTitleKey)
    }
  }

  const { width, groupHeights, height, isRightSidebar } = props

  const { groupIdKey, groupTitleKey, groupRightTitleKey } = props.keys

  const sidebarStyle = {
    width: `${width}px`,
    height: `${height}px`
  }

  const groupsStyle = {
    width: `${width}px`
  }

  let groupLines = props.groups.map((group, index) => {
    const elementStyle = {
      height: `${groupHeights[index]}px`,
      lineHeight: `${groupHeights[index]}px`
    }

    return (
      <div
        key={_get(group, groupIdKey)}
        className={
          'rct-sidebar-row rct-sidebar-row-' + (index % 2 === 0 ? 'even' : 'odd')
        }
        style={elementStyle}
      >
        {renderGroupContent(
          group,
          isRightSidebar,
          groupTitleKey,
          groupRightTitleKey
        )}
      </div>
    )
  })

  return (
    <div
      className={'rct-sidebar' + (isRightSidebar ? ' rct-sidebar-right' : '')}
      style={sidebarStyle}
    >
      <div style={groupsStyle}>{groupLines}</div>
    </div>
  )
}

export default Sidebar;
