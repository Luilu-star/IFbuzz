/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/Cadastro`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/Login`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/FinalE`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/FinalM`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/Auth/Cadastro`; params?: Router.UnknownOutputParams; } | { pathname: `/Auth/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/Auth/FinalE`; params?: Router.UnknownOutputParams; } | { pathname: `/Auth/FinalM`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/Auth/Cadastro${`?${string}` | `#${string}` | ''}` | `/Auth/Login${`?${string}` | `#${string}` | ''}` | `/Auth/FinalE${`?${string}` | `#${string}` | ''}` | `/Auth/FinalM${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/Cadastro`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/Login`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/FinalE`; params?: Router.UnknownInputParams; } | { pathname: `/Auth/FinalM`; params?: Router.UnknownInputParams; };
    }
  }
}
