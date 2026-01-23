/** @jsx jsx */
import { jsx } from '..'
import { Editor } from 'slate'

export const createTree = (): Editor => (
  <editor id="root">
    <block id="earlier sibling of ancestor">
      <text id="before child of earler sibling of ancestor">text</text>
      <inline id="child of earler sibling of ancestor">
        <text id="descendant of earler sibling of ancestor">text</text>
      </inline>
      <text id="after child of earler sibling of ancestor">text</text>
    </block>
    <block id="ancestor">
      <text id="before earlier sibling of parent">text</text>
      <inline id="earlier sibling of parent">
        <text id="before child of earler sibling of parent">text</text>
        <inline id="child of earler sibling of parent">
          <text id="descendant of earler sibling of parent">text</text>
        </inline>
        <text id="after child of earler sibling of parent">text</text>
      </inline>
      <text id="before parent">text</text>
      <inline id="parent">
        <text id="before earlier sibling">text</text>
        <inline id="earlier sibling">
          <text id="before child of earlier sibling">text</text>
          <inline id="child of earlier sibling">
            <text id="descendant of earlier sibling">text</text>
          </inline>
          <text id="after child of earlier sibling">text</text>
        </inline>
        <text id="before operand">text</text>
        <inline id="operand">
          <text id="before child">text</text>
          <inline id="child">
            <text id="descendant">text</text>
          </inline>
          <text id="after child">text</text>
        </inline>
        <text id="after operand">text</text>
        <inline id="later sibling">
          <text id="before child of later sibling">text</text>
          <inline id="child of later sibling">
            <text id="descendant of later sibling">text</text>
          </inline>
          <text id="after child of later sibling">text</text>
        </inline>
        <text id="after later sibling">text</text>
      </inline>
      <text id="after parent">text</text>
      <inline id="later sibling of parent">
        <text id="before child of later sibling of parent">text</text>
        <inline id="child of later sibling of parent">
          <text id="descendant of later sibling of parent">text</text>
        </inline>
        <text id="after child of later sibling of parent">text</text>
      </inline>
      <text id="after later sibling of parent">text</text>
    </block>
    <block id="later sibling of ancestor">
      <text id="before child of later sibling of ancestor">text</text>
      <inline id="child of later sibling of ancestor">
        <text id="descendant of later sibling of ancestor">text</text>
      </inline>
      <text id="after child of later sibling of ancestor">text</text>
    </block>
  </editor>
)
