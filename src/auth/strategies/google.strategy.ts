import { PassportStrategy } from '@nestjs/passport';
import {
  Strategy as GoogleOAuth2Strategy,
  Profile,
} from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(GoogleOAuth2Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('Access Token:: ', accessToken);
    console.log('Refresh Token:: ', refreshToken);
    console.log('Profile:: ', profile);
    const user = await this.authService.validateUser({
      email: profile._json.email,
      displayName: profile.displayName,
    });

    console.log('Google Strategy Validate');
    console.log(user);
    return user || null;
  }
}
