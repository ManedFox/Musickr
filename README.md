# Musickr

Musickr is a Web App that lets you listen to and watch the creations of authors from a specific location! It uses SoundCloud and Flickr databases.

The application is based on ASP.NET Core (C#) and ReactJS (TypeScript).

You can try here: https://musickr.equipemelies.com/

## Start the app

Firstly, you need to install .NET 7 and NodeJS v18.
> .NET 7 works on any OS (MacOS, Linux or Windows), and works natively with Apple Silicon.

You'll also need API keys for Flickr and Soundcloud.
<details>
  <summary><i>Soundcloud API key</i></summary>
  Go to https://www.soundcloud.com and via your browser's development tools, look in the network tab. Then look for the "ClientId" parameter in the API calls!
</details>
<details>
  <summary><i>Flickr API key</i></summary>
  You can get an API key directly from here https://www.flickr.com/services/api/misc.api_keys.html
</details>

After that, navigate to `Musickr.App` and add your API keys
```
  dotnet user-secrets set "SoundcloudClientId" "[YOUR SOUNDCLOUD CLIENT ID HERE]"
  dotnet user-secrets set "FlickrApiKey" "[YOUR FLICKR API KEY HERE]" 
```

Then, go to `Musickr.App/ClientApp` and do a `npm install`.

Finally, go to `Musickr.App` and launch the application with `dotnet watch run debug` !

## Libraries used

- **ChakraUI**: https://github.com/chakra-ui/chakra-ui
- **react-icons**: https://github.com/react-icons/react-icons
- **React Query**: https://github.com/TanStack/query
- **use-query-params**: https://github.com/pbeshai/use-query-params
- **react-use**: https://github.com/streamich/react-use
- **choc-autocomplete**: https://github.com/anubra266/choc-autocomplete
- **react-i18next**: https://github.com/i18next/react-i18next
- **react-router**: https://github.com/remix-run/react-router

## Authors and license

Created by T.Ferreira and Marobax under MIT License.
