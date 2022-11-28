type JustifyFlex = 
  | 'flex-start'
  | 'center'
  | 'flex-end'

type AlignFlex = 
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'


export interface IFlexBoxComponent {
  justify?: JustifyFlex,
  align?: AlignFlex
}
