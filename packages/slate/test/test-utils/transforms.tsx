/** @jsx jsx */
import { jsx } from '..'
import { Editor } from 'slate'

export const createTree = (
  operandType: 'element' | 'text' = 'element'
): Editor => (
  <editor id="root">
    <block id="earlier sibling of ancestor">
      <block id="child of earler sibling of ancestor">
        <text id="descendant of earler sibling of ancestor">AB</text>
      </block>
    </block>
    <block id="ancestor">
      <text id="earliest sibling of parent">AB</text>
      <inline id="earlier sibling of parent">
        <text id="before child of earler sibling of parent">AB</text>
        <inline id="child of earler sibling of parent">
          <text id="descendant of earler sibling of parent">AB</text>
        </inline>
        <text id="after child of earler sibling of parent">AB</text>
      </inline>
      <text id="before parent">AB</text>
      {operandType === 'element' ? (
        <inline id="parent">
          <text id="earliest sibling">AB</text>
          <inline id="earlier sibling">
            <text id="before child of earlier sibling">AB</text>
            <inline id="child of earlier sibling">
              <text id="descendant of earlier sibling">AB</text>
            </inline>
            <text id="after child of earlier sibling">AB</text>
          </inline>
          <inline id="operand">
            <text id="before child">AB</text>
            <inline id="child">
              <text id="descendant">AB</text>
            </inline>
            <text id="after child">AB</text>
          </inline>
          <inline id="later sibling">
            <text id="before child of later sibling">AB</text>
            <inline id="child of later sibling">
              <text id="descendant of later sibling">AB</text>
            </inline>
            <text id="after child of later sibling">AB</text>
          </inline>
          <text id="latest sibling">AB</text>
        </inline>
      ) : (
        <inline id="parent">
          <inline id="earliest sibling">
            <text id="before child of earliest sibling">AB</text>
            <inline id="child of earliest sibling">
              <text id="descendant of earliest sibling">AB</text>
            </inline>
            <text id="after child of earliest sibling">AB</text>
          </inline>
          <text id="earlier sibling">AB</text>
          <text id="operand">ABCDEF</text>
          <text id="later sibling">AB</text>
          <inline id="latest sibling">
            <text id="before child of latest sibling">AB</text>
            <inline id="child of latest sibling">
              <text id="descendant of latest sibling">AB</text>
            </inline>
            <text id="after child of latest sibling">AB</text>
          </inline>
        </inline>
      )}
      <text id="after parent">AB</text>
      <inline id="later sibling of parent">
        <text id="before child of later sibling of parent">AB</text>
        <inline id="child of later sibling of parent">
          <text id="descendant of later sibling of parent">AB</text>
        </inline>
        <text id="after child of later sibling of parent">AB</text>
      </inline>
      <text id="latest sibling of parent">AB</text>
    </block>
    <block id="later sibling of ancestor">
      <block id="child of later sibling of ancestor">
        <text id="descendant of later sibling of ancestor">AB</text>
      </block>
    </block>
  </editor>
)
