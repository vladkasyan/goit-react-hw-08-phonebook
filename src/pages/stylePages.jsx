export const paperMainStyle = photo => ({
  position: 'relative',
  backgroundColor: 'transperent',
  color: '#213123',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0px, 100px',
  backgroundImage: `url(${photo})`,
  minHeight: 500,
});

export const boxMainStyle = {
  position: 'relative',
  p: { xs: 3, md: 6 },
  pr: { md: 0 },
};

export const containerContactsStyle = photo => ({
  position: 'relative',
  p: 1.5,
  backgroundColor: 'grey.300',
  color: '#0c0808',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundImage: `url(${photo})`,
});

export const boxContactsStyle = {
  bgcolor: 'rgba(145, 185, 229, 0.15)',
  mx: 'auto',
  borderRadius: 5,
  maxWidth: 500,
  px: 5,
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const boxFormStyle = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const boxBottomFStyle = {
  display: 'flex',
  justifyContent: 'center',
  mb: 4,
  alignItems: 'center',
};

export const avatarStyle = {
  m: 1,
  bgcolor: 'secondary.main',
};

export const boxStyle = {
  width: '100%',
  height: 56,
  borderRadius: 5,
  mt: 1,
  display: 'flex',
  justifyContent: 'center',
  bgcolor: '#e6b367',
  alignItems: 'center',
};
